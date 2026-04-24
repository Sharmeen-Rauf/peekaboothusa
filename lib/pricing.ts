/**
 * Smart Pricing Engine for Peekabooth PK
 * Calculates dynamic pricing based on various factors.
 */

export type PricingFactors = {
  boothId: string;
  hours: number;
  date: Date;
  city: string;
  addons: string[];
};

export type PricingResult = {
  basePrice: number;
  extraHoursPrice: number;
  addonsPrice: number;
  surgeAmount: number;
  totalPrice: number;
  isSurgeApplied: boolean;
  surgeReason: string | null;
};

// Mock data for booth rates (in a real app, these would come from the DB)
const BOOTH_RATES: Record<string, { base: number; baseHours: number; extra: number }> = {
  "party": { base: 35000, baseHours: 3, extra: 5000 },
  "classic": { base: 45000, baseHours: 3, extra: 5000 },
  "360": { base: 40000, baseHours: 3, extra: 5000 },
  "registration": { base: 45000, baseHours: 8, extra: 5000 },
};

const ADDON_RATES: Record<string, number> = {
  "guestbook": 10000,
  "props": 5000,
  "redcarpet": 15000,
};

export function calculatePrice(factors: PricingFactors): PricingResult {
  const { boothId, hours, date, addons } = factors;
  const rates = BOOTH_RATES[boothId] || BOOTH_RATES["party"];
  
  let basePrice = rates.base;
  let extraHoursPrice = 0;
  
  if (hours > rates.baseHours) {
    extraHoursPrice = (hours - rates.baseHours) * rates.extra;
  }
  
  let addonsPrice = 0;
  addons.forEach(id => {
    addonsPrice += ADDON_RATES[id] || 0;
  });

  // Smart Surge Logic
  let surgeAmount = 0;
  let isSurgeApplied = false;
  let surgeReason = null;

  const dayOfWeek = date.getDay(); // 0 = Sunday, 5 = Friday, 6 = Saturday
  
  // Weekend Surge (+15% for Fri/Sat/Sun)
  if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) {
    surgeAmount = (basePrice + extraHoursPrice) * 0.15;
    isSurgeApplied = true;
    surgeReason = "Weekend Peak Demand";
  }

  const totalPrice = basePrice + extraHoursPrice + addonsPrice + surgeAmount;

  return {
    basePrice,
    extraHoursPrice,
    addonsPrice,
    surgeAmount,
    totalPrice,
    isSurgeApplied,
    surgeReason
  };
}

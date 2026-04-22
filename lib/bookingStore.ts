// Shared types and localStorage utilities for booking data

export type BookingSubmission = {
  id: string;
  submittedAt: string;
  status: "pending" | "confirmed" | "completed";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  startTime: string;
  venue: string;
  notes: string;
  eventType: string;
  city: string;
  booth: string;
  hours: number;
  addons: string[];
  estimatedTotal: number;
};

const STORAGE_KEY = "peekabooth_bookings";

export function saveBooking(booking: Omit<BookingSubmission, "id" | "submittedAt" | "status">) {
  if (typeof window === "undefined") return;
  const existing = getBookings();
  const newBooking: BookingSubmission = {
    ...booking,
    id: `BKG-${String(existing.length + 1).padStart(3, "0")}`,
    submittedAt: new Date().toISOString(),
    status: "pending",
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, newBooking]));
  return newBooking;
}

export function getBookings(): BookingSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function updateBookingStatus(id: string, status: BookingSubmission["status"]) {
  if (typeof window === "undefined") return;
  const bookings = getBookings();
  const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function deleteBooking(id: string) {
  if (typeof window === "undefined") return;
  const bookings = getBookings().filter(b => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function formatPKR(num: number) {
  return new Intl.NumberFormat("en-PK").format(num);
}

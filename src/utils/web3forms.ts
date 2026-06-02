export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function submitToWeb3Forms(
  accessKey: string,
  payload: Record<string, string>
): Promise<SubmitResult> {
  try {
    const formData = new FormData();
    formData.append("access_key", accessKey);
    Object.entries(payload).forEach(([k, v]) => formData.append(k, v));

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) return { ok: true };
    return { ok: false, message: data.message || "Submission failed. Please try again." };
  } catch {
    return { ok: false, message: "Network error. Please check your connection and try again." };
  }
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  return /^\d{10,12}$/.test(phone.replace(/\D/g, ""));
}

export async function submitDareNigeriaApplication(
  formData: Record<string, unknown>,
): Promise<{ success: boolean; applicationId?: string; error?: string }> {
  const response = await fetch("/api/applications/dare-nigeria", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { success: false, error: data.error || "Submission failed" };
  }

  return { success: true, applicationId: data.applicationId };
}

export async function submitSMEPitchApplication(
  formData: Record<string, unknown>,
): Promise<{ success: boolean; applicationId?: string; error?: string }> {
  const response = await fetch("/api/applications/sme-pitch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { success: false, error: data.error || "Submission failed" };
  }

  return { success: true, applicationId: data.applicationId };
}

export async function submitCaseStudyApplication(
  formData: Record<string, unknown>,
): Promise<{ success: boolean; applicationId?: string; error?: string }> {
  const response = await fetch("/api/applications/case-study", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { success: false, error: data.error || "Submission failed" };
  }

  return { success: true, applicationId: data.applicationId };
}

export async function submitContactMessage(
  formData: Record<string, unknown>,
): Promise<{ success: boolean; message?: string; error?: string }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { success: false, error: data.error || "Submission failed" };
  }

  return { success: true, message: data.message };
}

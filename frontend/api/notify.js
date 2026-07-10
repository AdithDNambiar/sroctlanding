import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return Response.json(
        { message: "Method not allowed." },
        { status: 405 }
      );
    }

    try {
      const { name, email } = await request.json();

      const cleanName = typeof name === "string" ? name.trim() : "";
      const cleanEmail = typeof email === "string" ? email.trim() : "";

      if (
        !cleanName ||
        cleanName.length > 80 ||
        !emailPattern.test(cleanEmail) ||
        cleanEmail.length > 150
      ) {
        return Response.json(
          { message: "Please provide a valid name and email address." },
          { status: 400 }
        );
      }

      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.error("Missing Gmail environment variables.");

        return Response.json(
          { message: "Email service is not configured." },
          { status: 500 }
        );
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"SROCT Landing Page" <${process.env.GMAIL_USER}>`,
        to: "sroct.off@gmail.com",
        replyTo: cleanEmail,
        subject: `New SROCT launch notification request — ${cleanName}`,
        text: [
          "A new person joined the SROCT launch notification list.",
          "",
          `Name: ${cleanName}`,
          `Email: ${cleanEmail}`,
          `Submitted at: ${new Date().toISOString()}`,
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>New SROCT launch notification request</h2>
            <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
            <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
          </div>
        `,
      });

      return Response.json(
        { message: "Submitted successfully." },
        { status: 200 }
      );
    } catch (error) {
      console.error("Notify API error:", error);

      return Response.json(
        { message: "Unable to submit right now. Please try again." },
        { status: 500 }
      );
    }
  },
};

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}
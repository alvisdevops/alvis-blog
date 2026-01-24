import { NextRequest, NextResponse } from 'next/server';

function generateEmailTemplate(name: string, email: string, phone: string, message: string) {
  const currentDate = new Date().toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 32px 40px; border-radius: 16px 16px 0 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                      ✉️ Nuevo Mensaje
                    </h1>
                    <p style="margin: 8px 0 0 0; color: #bfdbfe; font-size: 14px;">
                      Recibido desde alvis.blog
                    </p>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <div style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px;">
                      <span style="color: #ffffff; font-size: 12px; font-weight: 500;">Portfolio</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">

              <!-- Contact Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 16px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                      Información del contacto
                    </p>

                    <!-- Name -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                      <tr>
                        <td width="32" style="vertical-align: top;">
                          <div style="width: 32px; height: 32px; background-color: #dbeafe; border-radius: 8px; text-align: center; line-height: 32px;">
                            👤
                          </div>
                        </td>
                        <td style="padding-left: 12px; vertical-align: middle;">
                          <p style="margin: 0; color: #94a3b8; font-size: 12px;">Nombre</p>
                          <p style="margin: 2px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${name}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Email -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                      <tr>
                        <td width="32" style="vertical-align: top;">
                          <div style="width: 32px; height: 32px; background-color: #dbeafe; border-radius: 8px; text-align: center; line-height: 32px;">
                            📧
                          </div>
                        </td>
                        <td style="padding-left: 12px; vertical-align: middle;">
                          <p style="margin: 0; color: #94a3b8; font-size: 12px;">Email</p>
                          <p style="margin: 2px 0 0 0;">
                            <a href="mailto:${email}" style="color: #2563eb; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                    </table>

                    ${phone ? `
                    <!-- Phone -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="32" style="vertical-align: top;">
                          <div style="width: 32px; height: 32px; background-color: #dbeafe; border-radius: 8px; text-align: center; line-height: 32px;">
                            📱
                          </div>
                        </td>
                        <td style="padding-left: 12px; vertical-align: middle;">
                          <p style="margin: 0; color: #94a3b8; font-size: 12px;">Teléfono</p>
                          <p style="margin: 2px 0 0 0;">
                            <a href="tel:${phone}" style="color: #2563eb; font-size: 16px; font-weight: 600; text-decoration: none;">${phone}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                    ` : ''}
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin: 0 0 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                💬 Mensaje
              </p>
              <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 20px; border-radius: 0 12px 12px 0;">
                <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
              </div>

              <!-- Reply Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Mensaje desde mi portfolio" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                      Responder a ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1e293b; padding: 24px 40px; border-radius: 0 0 16px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <p style="margin: 0; color: #94a3b8; font-size: 13px;">
                      <strong style="color: #ffffff;">Cristian Alvis</strong> · DevOps Engineer | SRE
                    </p>
                    <p style="margin: 8px 0 0 0; color: #64748b; font-size: 12px;">
                      ${currentDate}
                    </p>
                  </td>
                  <td align="right">
                    <a href="https://alvis.blog" style="color: #60a5fa; font-size: 13px; text-decoration: none;">alvis.blog</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio <noreply@cristianalvis.com>',
          to: 'contacto@cristianalvis.com',
          subject: `✉️ Nuevo mensaje de ${name}`,
          html: generateEmailTemplate(name, email, phone || '', message),
          reply_to: email,
        }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error('Resend error:', error);
        throw new Error('Error sending email');
      }

      return NextResponse.json({ success: true });
    }

    // Fallback: log to console if no API key
    console.log('Contact form submission (no API configured):', { name, email, phone, message });
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}

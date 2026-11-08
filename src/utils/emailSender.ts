export const RECIPIENT_EMAIL = 'anand75io@moes.edu.mn';

export interface EmailPayload {
  subject: string;
  typeTitle: string;
  senderName: string;
  email: string;
  phone: string;
  brandName?: string;
  collabType?: string;
  category?: string;
  deadline?: string;
  budget?: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export const sendEmailViaFormSubmit = async (payload: EmailPayload): Promise<SendEmailResult> => {
  try {
    const postBody: Record<string, string> = {
      _subject: payload.subject,
      _template: 'table',
      _captcha: 'false',
      'Төрөл': payload.typeTitle,
      'Нэр': payload.senderName,
      'Утасны дугаар': payload.phone,
      'И-мэйл хаяг': payload.email,
    };

    if (payload.brandName) {
      postBody['Байгууллага / Брэндийн нэр'] = payload.brandName;
    }
    if (payload.collabType) {
      postBody['Контентын формат'] = payload.collabType;
    }
    if (payload.category) {
      postBody['Чиглэл'] = payload.category;
    }
    if (payload.deadline) {
      postBody['Товлосон хугацаа (Дедлайн)'] = payload.deadline;
    }
    if (payload.budget) {
      postBody['Төсвийн санал'] = payload.budget;
    }

    postBody['Зурвас / Тайлбар'] = payload.message;
    postBody['Илгээсэн цаг'] = new Date().toLocaleString('mn-MN');

    const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(postBody),
    });

    const data = await response.json();

    if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
      return {
        success: true,
        message: 'Амжилттай илгээгдлээ!',
      };
    } else {
      console.warn('FormSubmit returned non-ok:', data);
      return {
        success: false,
        message: data.message || 'Илгээхэд алдаа гарлаа.',
      };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Сүлжээний холболтоо шалгана уу.',
    };
  }
};

export const createMailtoLink = (payload: EmailPayload): string => {
  const body = `
Сайн байна уу, Ананд!

Таны вэбсайтаар дараах хүсэлтийг илгээж байна:
----------------------------------------
Төрөл: ${payload.typeTitle}
Нэр: ${payload.senderName}
Утас: ${payload.phone}
И-мэйл: ${payload.email}
${payload.brandName ? `Байгууллага/Брэнд: ${payload.brandName}\n` : ''}${payload.collabType ? `Формат: ${payload.collabType}\n` : ''}${payload.category ? `Чиглэл: ${payload.category}\n` : ''}${payload.deadline ? `Хугацаа: ${payload.deadline}\n` : ''}${payload.budget ? `Төсөв: ${payload.budget}\n` : ''}
Зурвас:
${payload.message}
----------------------------------------
`.trim();

  return `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
};

export const createDirectGmailLink = (payload: EmailPayload): string => {
  const body = `
Сайн байна уу, Ананд!

Таны вэбсайтаар дараах хүсэлтийг илгээж байна:
----------------------------------------
Төрөл: ${payload.typeTitle}
Нэр: ${payload.senderName}
Утас: ${payload.phone}
И-мэйл: ${payload.email}
${payload.brandName ? `Байгууллага/Брэнд: ${payload.brandName}\n` : ''}${payload.collabType ? `Формат: ${payload.collabType}\n` : ''}${payload.category ? `Чиглэл: ${payload.category}\n` : ''}${payload.deadline ? `Хугацаа: ${payload.deadline}\n` : ''}${payload.budget ? `Төсөв: ${payload.budget}\n` : ''}
Зурвас:
${payload.message}
----------------------------------------
`.trim();

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RECIPIENT_EMAIL)}&su=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
};

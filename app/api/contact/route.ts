import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json();

    // 필수 필드 검증
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    // Nodemailer Transporter 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 메일 옵션
    const mailOptions = {
      from: email, // 보내는 사람 (입력받은 이메일)
      to: "ahhaground@gmail.com", // 받는 사람 (관리자)
      subject: `[문의] ${name}님의 새로운 문의입니다.`,
      text: `
이름: ${name}
전화번호: ${phone}
이메일: ${email}

문의내용:
${message}
      `.trim(),
      html: `
        <div style="font-family: Pretendard, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0F172A; border-bottom: 2px solid #0EA5E9; padding-bottom: 10px;">
            새로운 문의가 접수되었습니다
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>전화번호:</strong> ${phone}</p>
            <p><strong>이메일:</strong> ${email}</p>
          </div>
          <div style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #0EA5E9;">
            <p style="margin: 0;"><strong>문의내용:</strong></p>
            <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // 메일 발송
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "문의가 성공적으로 전송되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("메일 발송 오류:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "메일 발송 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}


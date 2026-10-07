import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 같은 Wi-Fi의 휴대폰에서 개발 서버에 접속할 수 있도록 PC의 내부 IP 허용 (개발 모드 전용)
  allowedDevOrigins: ["192.168.0.26"],
};

export default nextConfig;

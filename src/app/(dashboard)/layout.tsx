import AuthGuard from "@/components/auth/auth-gurd";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <AuthGuard> {children}</AuthGuard>;
}

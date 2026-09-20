"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Field, FieldLabel } from "../ui/field";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const VerifyAccountForm = () => {
  const searchParams = useSearchParams();

  const [otp, setOtp] = useState("");

  const email = searchParams.get("email");

  const handleOTP = () => {
    console.log(otp);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Verify Your Account</CardTitle>
          <CardDescription>
            Please provide the OTP we send you in your email
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id="otp-form"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleOTP();
            }}
          >
            <Field>
              <FieldLabel htmlFor="otp">OTP</FieldLabel>
              <InputOTP
                maxLength={6}
                onChange={(value) => setOtp(value)}
                autoComplete="off"
                name="otp"
                id="otp"
                pattern={REGEXP_ONLY_DIGITS}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </Field>
          </form>
        </CardContent>
      </Card>
      <CardFooter>
        <Button type="submit" form="otp-form">
          Submit
        </Button>
        <Button>Resend</Button>
      </CardFooter>
    </div>
  );
};

export default VerifyAccountForm;

import { NextRequest, NextResponse } from 'next/server';

export const ThrowError = (err: Error) => {
  return NextResponse.json({ message: err }, { status: 500 });
};

export const ErrorHandler = (
  fn: (req: NextRequest) => Promise<Response | undefined>
) => {
  const apiResponse = async (req: NextRequest) => {
    try {
      const res = await fn(req);

      return res;
    } catch (e) {
      NextResponse.json({ message: e }, { status: 500 });
    }
  };
  return apiResponse;
};

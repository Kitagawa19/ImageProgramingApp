'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const VariableIntroduction: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Variables/1'); // 次の画面に遷移
    }, 5000); // 5秒後に遷移

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/Animal/Cat.png" width={200} height={100} alt="Cat" />
      <div className='relative mt-4 bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg'>
        <div className='absolute -top-2 left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-300'></div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold">こんにちは！</h2>
          <p className="text-xl mt-2">変数は情報を保存するための箱のようなものです。</p>
          <p className="text-xl mt-2">次の画面で変数についてもっと学びましょう！</p>
        </div>
      </div>
    </div>
  );
  
};


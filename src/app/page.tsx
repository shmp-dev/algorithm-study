import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>アルゴリズム練習用のページ</h1>
      </div>
      <div>
        <Link href="./algorithm">アルゴリズム一覧</Link>
      </div>
    </main>
  );
}

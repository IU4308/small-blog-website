import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Welcome 
        <span className="whitespace-nowrap">
          &nbsp;to my<span className="font-bold"> Website</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}

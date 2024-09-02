export default function Hero() {
  return (
    <section className="py-16 text-center text-on-color-light dark:text-on-color-dark">
      <h1 className="mb-4 text-5xl font-bold">自動化で卓越したSEOを実現</h1>
      <p className="mb-8">120以上のAIインサイト、デイリーランキング、パワフルなツール</p>
      <div className="mx-auto max-w-2xl">
        <div className="flex overflow-hidden rounded-full bg-white">
          <input
            type="text"
            className="flex-grow px-6 py-3 text-on-color-light transition-opacity focus:outline-none dark:text-on-color-dark"
            placeholder="ドメイン、キーワード、またはURLを入力"
          />
          <button className="bg-primary-light px-6 py-3 text-white transition-opacity hover:opacity-80 dark:bg-primary-dark dark:text-on-color-dark">
            始める
          </button>
        </div>
      </div>
    </section>
  );
}

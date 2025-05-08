import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Link
          href="/about/about-one"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Our Company</h2>
        </Link>
        <Link
          href="/about/team"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        </Link>
        <Link
          href="/about/structure"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Corporate Structure</h2>
        </Link>
        <Link
          href="/about/venture-capital"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Venture Capital</h2>
        </Link>
        <Link
          href="/about/venture-builder"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Venture Builder</h2>
        </Link>
        <Link
          href="/about/market-making"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">OTC / Market Making</h2>
        </Link>
        <Link
          href="/about/overview"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        </Link>
        <Link
          href="/about/mission-values"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Our Vision, Mission, Core Values
          </h2>
        </Link>
        <Link
          href="/about/about-two"
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Key Investment Area</h2>
          <p className="text-gray-500 text-sm">Coming soon...</p>
        </Link>
      </div>
    </div>
  );
}

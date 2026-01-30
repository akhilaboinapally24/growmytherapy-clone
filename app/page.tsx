export default function Home() {
  return (
    <main className="font-sans text-gray-800">

      {/* HERO SECTION */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-white to-purple-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Therapy for Anxiety, Trauma & Burnout in Santa Monica
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-8">
          You deserve a space that feels safe and supportive. I offer gentle,
          evidence-based therapy to help you manage overwhelming thoughts and
          reconnect with your sense of calm.
        </p>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition shadow-md">
          Schedule a Free Consultation
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0"
              alt="Therapist office"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Meet Dr. Maya Reynolds</h2>

            <p className="mb-4">
              I’m a Santa Monica therapist specializing in anxiety, trauma, and
              burnout. My approach blends CBT, EMDR, and mindfulness-based
              techniques to help you feel grounded and in control again.
            </p>

            <p>
              Therapy with me is collaborative and compassionate — we work at a
              pace that feels right for you, helping you build practical tools
              for daily life.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Anxiety Therapy</h3>
          <p>
            Learn to calm racing thoughts, regulate your nervous system, and
            feel more confident handling daily stress.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Trauma Therapy</h3>
          <p>
            Process past experiences safely using EMDR and body-based approaches
            to reduce triggers and feel more grounded.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Burnout & Stress Therapy</h3>
          <p>
            Restore balance, set healthy boundaries, and reconnect with your
            energy and motivation.
          </p>
        </div>
      </section>

      {/* OFFICE SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">A Calm Space for Healing</h2>
            <p className="mb-4">
              My Santa Monica office is designed to feel peaceful, private, and
              welcoming — a place where you can slow down and focus on your
              wellbeing.
            </p>
            <p>
              Whether you're working through anxiety, trauma, or burnout, our
              sessions provide a safe and supportive environment for growth and
              healing.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Therapy office interior"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h4 className="font-semibold mb-2">Do you offer online sessions?</h4>
              <p>
                Yes, I offer secure virtual therapy sessions for clients who
                prefer to meet remotely.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">How long is each session?</h4>
              <p>Sessions typically last 50 minutes.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">What issues do you specialize in?</h4>
              <p>
                I specialize in anxiety, trauma recovery, burnout, and stress
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Feeling Better?
        </h2>

        <p className="mb-6">
          Book a free consultation and take the first step toward a calmer,
          more balanced life.
        </p>

        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold shadow-md">
          Get Started
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm bg-gray-900 text-white">
        © 2026 Dr. Maya Reynolds | Therapy in Santa Monica
      </footer>

    </main>
  );
}

import { Play } from "lucide-react";

const sermons = [
  { title: "Finding Peace in the Storm", speaker: "Pastor David Miller", date: "Mar 9, 2026", series: "Unshakeable Faith", videoId: "dQw4w9WgXcQ" },
  { title: "The Power of Community", speaker: "Pastor Sarah Johnson", date: "Mar 2, 2026", series: "Better Together", videoId: "dQw4w9WgXcQ" },
  { title: "Walking in Grace", speaker: "Pastor David Miller", date: "Feb 23, 2026", series: "Grace Unlimited", videoId: "dQw4w9WgXcQ" },
  { title: "Hope for the Weary", speaker: "Pastor David Miller", date: "Feb 16, 2026", series: "Grace Unlimited", videoId: "dQw4w9WgXcQ" },
  { title: "Strength in Surrender", speaker: "Pastor Sarah Johnson", date: "Feb 9, 2026", series: "Unshakeable Faith", videoId: "dQw4w9WgXcQ" },
  { title: "The Heart of Worship", speaker: "Pastor David Miller", date: "Feb 2, 2026", series: "Better Together", videoId: "dQw4w9WgXcQ" },
];

const Sermons = () => {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-5xl font-extrabold text-primary-foreground">Sermons</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Missed a Sunday? Catch up on past messages anytime.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative aspect-video bg-foreground/5">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${sermon.videoId}`}
                  title={sermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-accent">{sermon.series}</span>
                <h3 className="mt-1 font-heading text-lg font-semibold">{sermon.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{sermon.speaker} · {sermon.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sermons;

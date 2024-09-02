interface FeatureCardProps {
  title: string;
  description: string;
  metric: string;
}

export default function FeatureCard({ title, description, metric }: FeatureCardProps) {
  return (
    <div className="rounded-lg bg-primary-light p-6 text-white dark:bg-primary-dark dark:text-on-color-dark">
      <div className="mb-2 text-4xl font-bold">{metric}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

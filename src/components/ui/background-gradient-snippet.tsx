export default function BackgroundGradientSnippet() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_200px,rgba(180,83,9,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_500px,rgba(234,88,12,0.3),transparent)]" />
    </div>
  );
}

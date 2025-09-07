type TwoPanelProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export function TwoPanel({left, right}: TwoPanelProps) {
  return (
    <section className="h-full w-full flex flex-row">
      {left}
      
      <main className="w-full h-full bg-background-main rounded-tl-2xl">
        {right}
      </main>
    </section>
  );
}

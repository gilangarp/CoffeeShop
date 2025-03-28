import Brand from "../../../components/visual/Brand/Brand";

export default function HeaderAddress() {
  return (
    <header className="flex flex-col gap-4 md:gap-9 lg:gap-14">
      <Brand variant="secondary" />
      <section className="flex flex-col gap-2 md:gap-3 lg:gap-5 font-jakarta">
        <h1 className="text-2xl font-semibold text-brown">Address</h1>
        <p className="text-base font-normal text-text-gray">
          You must fill in the address to continue.
        </p>
      </section>
    </header>
  );
}

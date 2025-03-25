import Brand from "../../../components/visual/Brand/Brand";

export default function HeaderSignup() {
  return (
    <header className="flex flex-col gap-4 md:gap-9 lg:gap-14">
      <Brand variant="secondary" />
      <section className="flex flex-col gap-2 md:gap-3 lg:gap-5 font-jakarta">
        <h1 className="text-2xl font-semibold text-brown">Register</h1>
        <p className="text-base font-normal text-text-gray">
          Fill out the form correctly
        </p>
      </section>
    </header>
  );
}

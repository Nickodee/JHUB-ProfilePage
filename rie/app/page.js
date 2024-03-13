import NavLayout from "./components/Navbar/NavLayout";

export default function Home() {
  return (
    <NavLayout>
      <section>Top Section</section>
      <section id="team">
        <p>About the Team</p>
        <div class="flex flex-wrap justify-center">
          <div class="">
            <div class="bg-gray-200 h-32 w-32 rounded-full"></div>
          </div>
          <div class="">
            <div class="bg-gray-200 h-32 w-32 rounded-full"></div>
          </div>
          <div class="">
            <div class="bg-gray-200 h-32 w-32 rounded-full"></div>
          </div>
        </div>

      </section>
    </NavLayout>
  );
}

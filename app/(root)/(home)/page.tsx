// app/page.js
import ClientTime from "@/components/ClientTIme";
import MeetingTypeList from "@/components/MeetingTypeList";

const Page = () => {
  // This will get the current time on the server
  const currentTime = new Date();

  // Format the date in a full style
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(currentTime);

  return (
    <section className="flex flex-col gap-10 text-white size-full">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col justify-between h-full max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              <ClientTime /> {/* This will handle the updating time */}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Page;

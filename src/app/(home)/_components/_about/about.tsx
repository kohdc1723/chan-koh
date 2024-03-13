export default function About() {
    return (
        <section id="about" className="flex flex-col">
            <h3 className="sticky lg:static top-0 pt-5 lg:pt-20 pb-5 px-5 lg:px-0 text-2xl font-black z-10 bg-neutral-800">
                About
            </h3>
            <div className="py-10 px-5 lg:px-0">
                <p className="p-5 rounded-lg backdrop-brightness-125 hover:backdrop-brightness-150">
                    Hi, my name is Chan Koh. I'm a graduate of the Computer Systems Technology program at British Columbia Institute of Technology.
                    <br /><br />
                    As a software developer, I aspire to contribute to the development of services that people actively use and find beneficial. I am currently seeking opportunities that align with this goal.
                </p>
            </div>
        </section>
    );
};
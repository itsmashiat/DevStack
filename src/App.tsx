import "./App.css";
import { useState, useEffect, useMemo } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import TechCardSkeleton from "./components/TechCardSkeleton";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error: unknown) => {
        console.error("Failed to load technologies data:", error);
        setLoading(false);
        toast.error("Failed to load technologies data.");
      });
  }, []);

  const addedIds = useMemo(
    () => new Set(stack.map((item) => item.id)),
    [stack],
  );

  const handleAddToStack = (tech: Technology): void => {
    if (addedIds.has(tech.id)) {
      toast.warn(`${tech.name} is already added to your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string): void => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = (): void => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("All items removed from your stack.");
  };

  return (
    <div className="min-h-screen text-slate-900 flex flex-col bg-[#fafafa]">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <section
          id="technologies"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-20 sm:scroll-mt-24"
        >
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Explore the{" "}
              <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="w-full lg:flex-1 min-w-0">
              {loading ? (
                <div>
                  <div className="flex items-center gap-2.5 mb-5 px-3.5 py-2.5 bg-pink-50/70 border border-pink-100 rounded-xl text-pink-700 text-xs font-medium w-fit">
                    <span className="loading loading-spinner loading-xs text-pink-600"></span>
                    <span>Loading technologies...</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <TechCardSkeleton key={index} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAdd={handleAddToStack}
                      isAdded={addedIds.has(tech.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="w-full lg:w-80 shrink-0">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>

        <div id="projects" className="scroll-mt-24" />
        <div id="about" className="scroll-mt-24" />
        <div id="contact" className="scroll-mt-24" />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default App;

import Image from "next/image";
import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/530d3abd-74d1-4673-9453-600fc09efdbc-m5hrg2.png",
  "https://utfs.io/f/6e2646ed-cb25-421b-a255-6a0e5956c7fe-250g.png",
  "https://utfs.io/f/83aad697-0aa7-456f-8bc2-4e35aa06ab02-2fyg.png",
  "https://utfs.io/f/9fdf5a4b-3a2b-4197-9bff-e3fadd94324f-26a8r.png",
  "https://utfs.io/f/a3dd6033-0e1f-461e-88c7-91234372511a-ibclvr.png",
  "https://utfs.io/f/bf19bb3b-0e09-4a28-a9d0-4b1d4f40ba44-n3j1h4.png",
  "https://utfs.io/f/2af95e57-4691-41b3-bcb1-e926693f8e5b-23qgb.png",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" className="rounded-xl" />
          </div>
        ))}
      </div>
    </main>
  );
}

import Image from "next/image";

export default function BuyMeCoffeePage() {
  return (
    <div className="container py-5" style={{ maxWidth: "700px" }}>
      <h1 className="mb-4 text-center">☕ Buy Me a Coffee</h1>
      <p className="lead text-center">
        Hi there! I&apos;m <strong>Tirthrajsinh Jadeja</strong>, a web developer and open-source contributor passionate about building tools that help students, developers, and creators like you.
      </p>
      <p className="text-center">
        If you find my work helpful or just want to support me, you can buy me a coffee. Your support encourages me to build more cool stuff!
      </p>
      <div className="text-center my-4 corsur-pointer">
        <a
          href={process.env.BUY_ME_COFFEE}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            width={217}
            height={60}
          />
        </a>
      </div>
      <p className="text-center text-muted">
        Thank you for your generosity! Every little bit helps 🚀
      </p>
    </div>
  );
}

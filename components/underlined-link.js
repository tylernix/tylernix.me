export default function UnderlinedLink({ href, text, target}) {
    return (
      <>
        {" "}
        <span className="border-b-2 border-imperial-red"><a
          href={href}
          className=" hover:text-imperial-red duration-200 transition-colors"
          target={target}
        >
          {text}
        </a></span>
        {" "}
      </>
    )
  }


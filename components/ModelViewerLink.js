import React from "react";
import Link from "next/link";

export default function ModelViewerLink({ href, src, alt }) {
  return (
    <Link href={href}>
      <a style={{ border: "1px solid" }}>
        <figure style={{ margin: 0, padding: 0 }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={src}
            alt={alt}
          />
          <figcaption style={{ textAlign: "center" }}>{alt}</figcaption>
        </figure>
      </a>
    </Link>
  );
}

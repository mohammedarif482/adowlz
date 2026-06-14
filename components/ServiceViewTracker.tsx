"use client";

import { useEffect } from "react";
import { trackServiceView } from "@/lib/analytics";

/** Fires a ViewContent/service_view event once when a service detail page mounts. */
export function ServiceViewTracker({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  useEffect(() => {
    trackServiceView(slug, title);
  }, [slug, title]);

  return null;
}

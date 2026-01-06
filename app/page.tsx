import { redirect } from "next/navigation"
import { defaultLocale } from "@/lib/i18n/config"

// Redirect the root path to the default locale to ensure translations are available
export default function Home() {
  redirect(`/${defaultLocale}`)
}

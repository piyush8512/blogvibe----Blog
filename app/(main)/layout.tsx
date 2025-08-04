import { ReactNode } from "react";
import MainBanner from "@/components/main/banner/main-banner";
import { Main } from "next/document";
import MainHeader from "@/components/main/header/main-header";
import MainGrid from "@/components/main/grid/main-grid";
import MainFooter from "@/components/main/footer/main-footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainBanner />
      <MainHeader />
      <MainGrid>
        <div className="min-h-full py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">{children}</div>
          </div>
        </div>
      </MainGrid>
      <MainFooter />
    </>
  );
}

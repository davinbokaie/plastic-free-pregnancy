import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "What's Actually in Your Tap Water? | Plastic-Free Pregnancy",
  description: "PFAS, lead, microplastics — what's really in your tap water and what kind of filter actually removes them.",
};

export default function TapWater() {
  return (
    <ArticleLayout title="What's Actually in Your Tap Water?">
      <p>You turn on the faucet, fill a glass, and drink. It looks clear. It probably tastes fine. And for most Americans, it meets federal safety standards. But meeting legal minimums and being truly clean aren&apos;t the same thing.</p>

      <p>A recent study found that at least one type of PFAS — synthetic &quot;forever chemicals&quot; linked to cancer and immune system damage — could be present in nearly half of the nation&apos;s tap water. This is just one of hundreds of potential contaminants flowing through America&apos;s aging pipes.</p>

      <p>The uncomfortable reality is that your tap water is a mix. It contains what your municipality treats for, what they&apos;re required to test for, and what slips through both processes. Understanding that mix — and what it means for your baby — is the first step toward making informed choices about the water that touches their formula, fills their sippy cup, and eventually becomes part of their developing body.</p>

      <h2>The Main Contaminants You Should Know About</h2>

      <p><strong>Microplastics</strong> are now ubiquitous in municipal water supplies, entering through aging infrastructure (especially PVC pipes) and environmental contamination, with studies showing that 94% of U.S. tap water samples contain detectable microplastics.</p>

      <p><strong>PFAS (per- and polyfluoroalkyl substances)</strong>, often called &quot;forever chemicals,&quot; don&apos;t break down in the environment or in your body and have been linked to cancer, thyroid disease, decreased vaccine response in children, and developmental issues.</p>

      <p><strong>Lead</strong> remains a serious concern, especially in homes built before 1986 when lead pipes and solder were common — even low levels can affect children&apos;s brain development, lower IQ, and cause behavioral problems.</p>

      <p><strong>Nitrates</strong> come primarily from agricultural runoff and have been associated with increased risk of colorectal cancer and thyroid problems, and are particularly dangerous for infants under six months as they can interfere with the blood&apos;s ability to carry oxygen.</p>

      <h2>How Filtration Works (At a High Level)</h2>

      <p>Not all filters are created equal, and not all contaminants are removed by the same methods.</p>

      <p><strong>Carbon filters</strong> (the kind in most pitchers and faucet attachments) use activated carbon to trap chlorine, some pesticides, and improve taste and odor. They&apos;re good at what they do, but they don&apos;t remove lead, nitrates, or most microplastics. Some higher-end carbon filters with very fine pores (1 micron or smaller) can catch microplastics, but standard pitcher filters won&apos;t.</p>

      <p><strong>Reverse osmosis (RO) systems</strong> force water through a semi-permeable membrane that blocks particles down to 0.0001 microns. This removes PFAS, lead, microplastics, nitrates, and most other contaminants. Recent research also found that boiling water (especially hard water with higher mineral content) and then filtering it can remove up to 90% of microplastics, as the heat causes minerals like calcium carbonate to form solid crystals that trap plastic particles.</p>

      <p><strong>Ion exchange filters</strong> swap harmful ions (like lead) for harmless ones (like sodium). They&apos;re often used in combination with carbon filtration for broader contaminant removal.</p>

      <h2>Look Up Your Own Water</h2>

      <p>The most useful tool for understanding your specific tap water is the Environmental Working Group&apos;s Tap Water Database. You can enter your ZIP code at ewg.org/tapwater and see exactly which contaminants have been detected in your local water supply, how they compare to health-based guidelines (not just legal limits), and which types of filters are certified to remove them.</p>

      <p>Babies drink more water per pound of body weight than adults. Their organs are still forming. Their detoxification systems aren&apos;t fully developed. What&apos;s a trace amount for you can be a significant exposure for them, making water quality one of the most important decisions you&apos;ll make in their early years.</p>
    </ArticleLayout>
  );
}

import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Beyond BPA-Free: What to Actually Look For | Plastic-Free Pregnancy",
  description: "Why the BPA-free label doesn't mean what you think it means, and what materials actually keep your baby safe.",
};

export default function BPAFree() {
  return (
    <ArticleLayout title="Beyond BPA-Free: What to Actually Look For">
      <p>You&apos;ve seen the label on baby bottles, sippy cups, and food containers: &quot;BPA-Free&quot; stamped across the packaging in reassuring letters. It feels like a win — you&apos;re protecting your baby from a chemical you&apos;ve heard is harmful. But here&apos;s what that label doesn&apos;t tell you: the plastic still contains bisphenols. Just different ones.</p>

      <p>The BPA-free label has become one of the most misleading markers in baby products, creating a false sense of safety while often delivering the same risks in a slightly different molecular package.</p>

      <h2>What BPA Is and Why It Was Banned</h2>

      <p>Bisphenol A (BPA) is a synthetic chemical used to make polycarbonate plastics and epoxy resins — the hard, clear plastic in bottles and the coating inside metal food cans. It&apos;s also an endocrine disruptor, meaning it mimics estrogen in the body and interferes with hormone signaling. Research has linked BPA exposure to reproductive problems, metabolic disorders, developmental issues in children, and increased cancer risk.</p>

      <p>In 2012, the FDA banned BPA from baby bottles and sippy cups — not because the agency determined it was unsafe, but because manufacturers had already voluntarily stopped using it and requested the formal ban for marketing purposes. The EU went further in 2024, banning BPA from all food contact materials after concluding that current exposure levels posed health concerns across all age groups.</p>

      <h2>The Regrettable Substitution Problem</h2>

      <p>When BPA was phased out of baby products, manufacturers didn&apos;t stop using bisphenols — they just switched to structurally similar compounds with names like bisphenol S (BPS) and bisphenol F (BPF). These chemicals share the same basic structure as BPA: two phenol rings connected by a linker. That structural similarity matters, because it means they interact with the body in similar ways.</p>

      <p>A systematic review comparing BPA, BPS, and BPF found that the replacement chemicals have endocrine-disrupting effects in the same order of magnitude as BPA — estrogenic, anti-estrogenic, and anti-androgenic activity all present. In some studies, BPS and BPF showed comparable or even stronger effects than the chemical they replaced. Research on human breast tissue found that BPS exposure disrupted normal cell architecture and triggered protumorigenic changes. Studies on reproductive cells showed that BPAF, another common substitute, was actually more toxic than BPA itself.</p>

      <p>This pattern — replacing one harmful chemical with a structurally similar one that turns out to be just as problematic — is called regrettable substitution. It&apos;s why a product labeled &quot;BPA-free&quot; doesn&apos;t mean much. It just means the manufacturer swapped one bisphenol for another, and the new one probably hasn&apos;t been studied as extensively. You&apos;re trading a known risk for an unknown one that emerging research suggests isn&apos;t better.</p>

      <h2>Why &quot;BPA-Free&quot; Says Nothing About Microplastics</h2>

      <p>Even if BPS and BPF were genuinely safer than BPA — and the evidence suggests they&apos;re not — the BPA-free label still misses the bigger issue: microplastics.</p>

      <p>Bisphenol chemicals leach from plastic into food and liquids, especially when heated or in contact with acidic or fatty substances. But the plastic itself also sheds particles. Every time you wash a plastic bottle, heat it, or even just use it, microscopic fragments break off and end up in whatever you&apos;re feeding your baby. The BPA-free label addresses one chemical additive. It does nothing about the plastic material breaking down at a structural level.</p>

      <h2>From BPA-Free to Plastic-Free</h2>

      <p>The answer isn&apos;t finding a better plastic. It&apos;s choosing different materials entirely — ones that don&apos;t shed particles and don&apos;t leach endocrine-disrupting chemicals.</p>

      <p>Glass is inert and doesn&apos;t leach anything. Stainless steel works for bottles, cups, and food containers — look for food-grade 18/8 or 304 stainless. Medical-grade silicone is stable and heat-safe, making it the best choice for bottle nipples and pacifiers. Natural rubber, organic cotton, and wood round out the safer materials for toys, teethers, and feeding utensils.</p>

      <p>Eliminating every source isn&apos;t realistic — most formula cans and some baby food packaging still contain plastics and bisphenol-lined materials. What you can control are the products you use daily: bottles, storage containers, dishes, and cups.</p>

      <p>When you swap a plastic baby bottle for glass or stainless steel, you&apos;re not just avoiding BPA. You&apos;re also avoiding BPS, BPF, BPAF, and whatever replacement chemical comes next. You&apos;re eliminating the microplastics that shed from the bottle&apos;s surface. And you&apos;re choosing materials that have been used safely for decades, with no emerging research raising new red flags.</p>

      <p>The BPA-free label isn&apos;t the reassurance it pretends to be. It&apos;s a distraction from the real question: what is this made of, and does that material belong in contact with my baby&apos;s food?</p>
    </ArticleLayout>
  );
}

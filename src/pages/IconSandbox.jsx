import { ArrowRight } from "lucide-react";
import {
  IconPlantscape,
  IconGreenWall,
  IconAtrium,
  IconHoliday,
  IconFlorals,
  IconMaintenance,
  IconSustain,
  IconExpertise,
  IconQuality,
} from "../components/icons/BotanicalIcons";

/* ═══════════════════════════════════════════════════════════
   ICON REGISTRY & GROUPS
   ═══════════════════════════════════════════════════════════ */

const botanicalIcons = [
  { Icon: IconPlantscape, name: "Plantscape", usage: "Interior Plantscaping" },
  { Icon: IconGreenWall, name: "GreenWall", usage: "Green Walls" },
  { Icon: IconAtrium, name: "Atrium", usage: "Large Atrium Design" },
  { Icon: IconHoliday, name: "Holiday", usage: "Holiday Decorations" },
  { Icon: IconFlorals, name: "Florals", usage: "Color Program" },
  { Icon: IconMaintenance, name: "Maintenance", usage: "Plant Maintenance" },
  { Icon: IconSustain, name: "Sustain", usage: "Sustainability" },
  { Icon: IconExpertise, name: "Expertise", usage: "Expertise / Team" },
  { Icon: IconQuality, name: "Quality", usage: "Quality / Trust" },
];

/* ═══════════════════════════════════════════════════════════
   STYLE RENDERERS — each applies a different visual treatment
   ═══════════════════════════════════════════════════════════ */

/** Style A — Line art, no fill (clean & minimal) */
const StyleLine = ({ Icon }) => (
  <div className="w-16 h-16 flex items-center justify-center">
    <Icon
      className="w-12 h-12 text-forest-700"
      style={{ "--icon-fill": "none", "--icon-accent": "none" }}
    />
  </div>
);

/** Style B — Duotone (sage accent fills + forest strokes) */
const StyleDuotone = ({ Icon }) => (
  <div className="w-16 h-16 flex items-center justify-center">
    <Icon
      className="w-12 h-12 text-forest-800"
      style={{ "--icon-fill": "none", "--icon-accent": "#9daf6f" }}
    />
  </div>
);

/** Style C — Filled on sage circle */
const StyleFilledCircle = ({ Icon }) => (
  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center">
    <Icon
      className="w-10 h-10 text-forest-800"
      style={{ "--icon-fill": "none", "--icon-accent": "#738754" }}
    />
  </div>
);

/** Style D — Solid dark background with light icons */
const StyleSolid = ({ Icon }) => (
  <div className="w-16 h-16 bg-forest-800 rounded-2xl flex items-center justify-center shadow-md">
    <Icon
      className="w-10 h-10 text-sage-200"
      style={{
        "--icon-fill": "rgba(157,175,111,0.15)",
        "--icon-accent": "#d3e5b5",
      }}
    />
  </div>
);

/** Style E — Organic / hand-drawn container */
const StyleOrganic = ({ Icon }) => (
  <div
    className="w-16 h-16 flex items-center justify-center"
    style={{
      background: "linear-gradient(135deg, #f3f7ec 0%, #e5efd5 100%)",
      border: "2px solid #9daf6f",
      borderRadius: "47% 53% 52% 48% / 46% 52% 48% 54%",
    }}
  >
    <Icon
      className="w-10 h-10 text-forest-700"
      style={{ "--icon-fill": "none", "--icon-accent": "#738754" }}
    />
  </div>
);

/** Style F — Claymorphism / soft 3D */
const StyleClay = ({ Icon }) => (
  <div
    className="w-16 h-16 rounded-2xl flex items-center justify-center"
    style={{
      background: "linear-gradient(145deg, #e5efd5, #c5d4b8)",
      boxShadow:
        "6px 6px 14px rgba(51,64,28,0.2), -4px -4px 10px rgba(243,247,236,0.9), inset 1px 1px 2px rgba(255,255,255,0.4)",
    }}
  >
    <Icon
      className="w-10 h-10 text-forest-900"
      style={{
        "--icon-fill": "rgba(157,175,111,0.12)",
        "--icon-accent": "#5f7440",
        filter: "drop-shadow(1px 1px 1px rgba(51,64,28,0.25))",
      }}
    />
  </div>
);

/* ═══════════════════════════════════════════════════════════
   STYLE DEFINITIONS
   ═══════════════════════════════════════════════════════════ */
const allStyles = [
  {
    key: "line",
    label: "Clean Line Art",
    description:
      "Pure strokes, no fills. Minimal and elegant — lets the botanical detail speak for itself.",
    Renderer: StyleLine,
    bg: "bg-white",
  },
  {
    key: "duotone",
    label: "Duotone / Two-Color",
    description:
      "Forest strokes with sage-green accent fills. Adds depth and brand color without complexity.",
    Renderer: StyleDuotone,
    bg: "bg-sage-50",
  },
  {
    key: "filled-circle",
    label: "On Sage Circle",
    description:
      "Botanical icons on a soft sage circle. Familiar container shape but with custom illustrations.",
    Renderer: StyleFilledCircle,
    bg: "bg-white",
  },
  {
    key: "solid",
    label: "Solid / Dark Background",
    description:
      "Light icons on dark forest backgrounds. Bold, modern, high contrast.",
    Renderer: StyleSolid,
    bg: "bg-sage-50",
  },
  {
    key: "organic",
    label: "Organic / Hand-Drawn Container",
    description:
      "Irregular, organic-shaped borders. Eco-friendly, approachable, and warm.",
    Renderer: StyleOrganic,
    bg: "bg-white",
  },
  {
    key: "clay",
    label: "Soft 3D / Claymorphism",
    description:
      "Soft gradients, layered shadows. Tactile and polished — very current design trend.",
    Renderer: StyleClay,
    bg: "bg-sage-50",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════ */
const IconSandbox = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-sage-500/20 text-sage-300 rounded-full text-sm font-medium mb-6">
            Design Sandbox
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Icon Style Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Custom botanical SVG icons designed specifically for Interior
            Greenscapes — not from any stock library.
          </p>
          <p className="text-sage-400 max-w-2xl mx-auto">
            Each icon below is a hand-crafted SVG with botanical detail. Compare
            them across 6 different rendering styles to find the right
            direction.
          </p>
        </div>
      </section>

      {/* Style Sections */}
      {allStyles.map((style) => (
        <section key={style.key} className={`py-20 ${style.bg}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Style Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-3 h-3 rounded-full bg-sage-400" />
                <h2 className="font-display text-3xl font-semibold text-forest-800">
                  {style.label}
                </h2>
              </div>
              <p className="text-gray-600 text-lg max-w-3xl">
                {style.description}
              </p>
            </div>

            {/* All icons in this style */}
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-8 mb-14">
              {botanicalIcons.map(({ Icon, name, usage }) => (
                <div
                  key={`${style.key}-${name}`}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <style.Renderer Icon={Icon} />
                  <span className="text-xs font-medium text-forest-800 leading-tight mt-1">
                    {name}
                  </span>
                  <span className="text-[10px] text-gray-400 leading-tight">
                    {usage}
                  </span>
                </div>
              ))}
            </div>

            {/* Service card preview for this style */}
            <div className="pt-10 border-t border-sage-200">
              <h3 className="font-subtitle text-sm uppercase tracking-wider text-sage-600 mb-6">
                In Context — Service Cards
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {botanicalIcons.slice(0, 3).map(({ Icon, usage }) => (
                  <div
                    key={`${style.key}-card-${usage}`}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-sage-100"
                  >
                    <div className="mb-4">
                      <style.Renderer Icon={Icon} />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-forest-800 mb-2">
                      {usage}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {usage === "Interior Plantscaping"
                        ? "Custom plant designs that transform your indoor spaces into vibrant, living environments."
                        : usage === "Green Walls"
                          ? "Stunning vertical gardens that make a bold statement while improving air quality."
                          : "Dramatic installations for lobbies, atriums, and large commercial spaces."}
                    </p>
                    <span className="inline-flex items-center text-sage-500 text-sm font-medium mt-3">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Side-by-side comparison table */}
      <section className="py-20 bg-gradient-to-b from-sage-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-forest-800 mb-3">
              Side-by-Side Comparison
            </h2>
            <p className="text-gray-600 text-lg">
              Every custom icon across all 6 styles at a glance.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-sage-200">
                  <th className="py-3 px-4 text-left font-subtitle text-xs text-sage-600 uppercase tracking-wider">
                    Icon
                  </th>
                  {allStyles.map((s) => (
                    <th
                      key={s.key}
                      className="py-3 px-4 text-center font-subtitle text-xs text-sage-600 uppercase tracking-wider whitespace-nowrap"
                    >
                      {s.label.split("/")[0].split("(")[0].trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {botanicalIcons.map(({ Icon, name, usage }) => (
                  <tr
                    key={`compare-${name}`}
                    className="border-b border-sage-100 hover:bg-sage-50/50 transition-colors"
                  >
                    <td className="py-5 px-4">
                      <span className="text-sm font-medium text-forest-800">
                        {name}
                      </span>
                      <span className="block text-xs text-gray-400">
                        {usage}
                      </span>
                    </td>
                    {allStyles.map((s) => (
                      <td key={`${s.key}-${name}`} className="py-5 px-4">
                        <div className="flex justify-center">
                          <s.Renderer Icon={Icon} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IconSandbox;

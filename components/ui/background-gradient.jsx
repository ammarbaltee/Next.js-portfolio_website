import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}) => {
  // Memoize the animation variants
  const variants = useMemo(() => ({
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  }), []);

  // Memoize the transition settings
  const transitionSettings = useMemo(() => ({
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
  }), []);

  // Combined animation and static background class
  const backgroundClass = "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_0,#00ccb1,#141316)]";

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      {/* First animated background layer */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={animate ? transitionSettings : undefined}
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          backgroundClass
        )}
      />
      {/* Second animated background layer for brightness */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={animate ? transitionSettings : undefined}
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          backgroundClass
        )}
      />
      <div className={cn("relative z-10 text-white", className)}>{children}</div>
    </div>
  );
};

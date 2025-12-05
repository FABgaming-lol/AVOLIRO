import React from 'react'
import { motion } from 'framer-motion'

export default function SectionReveal({ children, className, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="section-divider"
        initial={{ width: 0 }}
        whileInView={{ width: '120px' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      {children}
    </motion.section>
  )
}
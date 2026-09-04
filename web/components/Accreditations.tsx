'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "motion/react"
import '../styles/accreditations.css'
import { BadgeCheck } from 'lucide-react'
import { BlurFade } from "@/components/ui/blur-fade"
import { ShineBorder } from "@/components/ui/shine-border"

export default function Accreditations () {

    return (
        <section id="accreditations">
            <div className="accreditations-container">
                <motion.div
                    initial={{opacity: 0, y: 32}} whileInView={{opacity: 1, y: 0}} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1, delay: 0 }}
                    className="accreditation-card-container"
                >
                    <Card className="accreditation-card">
                        <CardHeader className="card-header">
                            <BadgeCheck />
                            <CardTitle className="title">
                                <span className="site-heading">QCTO</span> Accredited
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 32}} whileInView={{opacity: 1, y: 0}} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1, delay: .5 }}
                    className="accreditation-card-container"
                >
                    <Card className="accreditation-card">
                        <CardHeader className="card-header">
                            <BadgeCheck />
                            <CardTitle className="title">
                                <span className="site-heading">SETA</span> Accredited
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 32}} whileInView={{opacity: 1, y: 0}} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1, delay: 1 }}
                    className="accreditation-card-container"
                >
                    <Card className="accreditation-card">
                        <CardHeader className="card-header">
                            <BadgeCheck />
                            <CardTitle className="title">
                                <span className="site-heading">BEST</span> Educators in the field
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
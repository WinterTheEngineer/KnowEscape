'use client';

import '../styles/nav.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from "motion/react"
import {ArrowUpRight, ChevronDown} from "lucide-react"

export default function Nav () {
    const pathname = usePathname()

    return (
        <motion.nav initial={{opacity: 0, y: 16}} animate={{opacity: 1, y: 0}} transition={{ duration: 1 }}>
            <div className="glow"></div>
            <Link href="/" className="nav-logo">
                <Image
                    alt='Knowescape Consulting official logo'
                    src='/text_logo_slim.png'
                    fill
                    priority
                />
            </Link>
            <div className="nav-list">
                <Link className="nav-link" href="/">Home</Link>

                <Link className="nav-link" href="/about">About</Link>

                <button className="nav-link has-sub-menu" type="button">
                    Services
                    <ChevronDown />
                    <div className="sub-menu">
                        <h4 className='site-heading'>Our Services</h4>
                        <div className="menus">
                            <div className="menu-group">
                                <h5>Skills Development</h5>
                                <ul>
                                    <li>
                                        <Link href="/services/employee-development" className="site-link">
                                            Employee Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/workplace-skills-planning" className="site-link">
                                            Workplace Skills Planning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/skills-development-training" className="site-link">
                                            Skills Development Training
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/skills-development-compliance" className="site-link">
                                            Skills Development Compliance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/learnerships-workplace-training" className="site-link">
                                            Learnerships & Workplace Training
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-group">
                                <h5>Startup Support</h5>
                                <ul>
                                    <li>
                                        <Link href="/services/startup-strategy" className='site-link'>
                                            Startup Strategy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/business-planning" className='site-link'>
                                            Business Planning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/business-mentorship" className='site-link'>
                                            Business Mentorship
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/growth-market-readiness" className='site-link'>
                                            Growth & Market Readiness
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/business-registration-setup" className='site-link'>
                                            Business Registration & Setup
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-group">
                                <h5>Enterprise & Supplier Development</h5>
                                <ul>
                                    <li>
                                        <Link href="/services/supplier-development" className="site-link">
                                            Supplier Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/enterprise-development" className="site-link">
                                            Enterprise Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/bbbee-esd-advisory" className="site-link">
                                            B-BBEE & ESD Advisory
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/business-growth-support" className="site-link">
                                            Business Growth Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-group">
                                <h5>B-BBEE Advisory</h5>
                                <ul>
                                    <li>
                                        <Link href="/services/bbbee-advisory" className='site-link'>
                                            Strategy & Planning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/bbbee-advisory/assessment" className='site-link'>
                                            Assessment & Readiness
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/bbbee-advisory/compliance" className='site-link'>
                                            Compliance Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/bbbee-advisory/scorecard" className='site-link'>
                                            Scorecard Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/bbbee-advisory/transformation" className='site-link'>
                                            Transformation Advisory
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </button>

                <Link className="nav-link" href="/contact">Contact</Link>
            </div>
            <div className="actions nav">
                <Link href='/' className="site-btn primary">
                    Apply
                </Link>
                <Link className="site-link primary" href={'/'}>
                    Book a Call
                    <ArrowUpRight />
                </Link>
            </div>
        </motion.nav>
    )
}
from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.9  # these are your core pages

    def items(self):
        return [
            "home",
            "skills_development",
            "esd",
            "startup_support",
            "contact",
            "learner_signup",
            "company_signup",
        ]

    def location(self, item):
        return reverse(item)

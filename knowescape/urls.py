from . import views
from django.urls import path
from django.conf import settings
from .sitemaps import StaticViewSitemap
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap

sitemaps = {
    "static": StaticViewSitemap,
}

urlpatterns = [
    path("", views.index, name="home"),

    # Services / key pages
    path("start-up-support/", views.start_up, name="startup_support"),
    path("enterprise-supplier-development/", views.es_dev, name="esd"),
    path("skills-development/", views.skills_dev, name="skills_development"),

    # Other important actions/pages
    path("contact/", views.contact, name="contact"),
    path("signup/learner/", views.learner_signup, name="learner_signup"),
    path("signup/company/", views.company_signup, name="company_signup"),

    path("sitemap.xml", sitemap, {"sitemaps": sitemaps}, name="sitemap"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

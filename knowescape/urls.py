from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

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
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

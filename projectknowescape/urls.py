from django.contrib import admin
from django.urls import path, include
from django.contrib.sitemaps.views import sitemap

from knowescape.sitemaps import StaticViewSitemap
from django.views.generic import TemplateView

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('knowescape.urls')),

   path(
        "sitemap.xml",
        TemplateView.as_view(
            template_name="knowescape/sitemap.xml",
            content_type="application/xml"
        ),
    ),
]

urlpatterns += staticfiles_urlpatterns()

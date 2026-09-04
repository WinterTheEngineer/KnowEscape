from rest_framework import serializers
from phonenumber_field.serializerfields import PhoneNumberField


class ContactSerializer(serializers.Serializer):

    service_choices=[
        ("startup-support", "Startup Support"),
        ("tender-support", "Tender Support"),
        ("skills-development", "Skills Development"),
        ("enterprise-supplier-development", "Enterprise & Supplier Development"),
    ]

    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone = PhoneNumberField(region="ZA", required=False, allow_null=True, allow_blank=True)
    company = serializers.CharField(max_length=100, required=False, allow_blank=True)
    service = serializers.ChoiceField(choices=service_choices)
    message = serializers.CharField()
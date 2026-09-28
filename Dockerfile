FROM busybox:1.38.0
COPY dist_keycloak/*.jar /opt/keycloak/providers

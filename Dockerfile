FROM postgres

ENV POSTGRES_PASSWORD=password

WORKDIR /var/lib/postgresql/data

EXPOSE 5432

RUN mkdir -p /var/lib/postgresql/data

RUN chown -R postgres:postgres /var/lib/postgresql/data

USER postgres

CMD ["postgres"]
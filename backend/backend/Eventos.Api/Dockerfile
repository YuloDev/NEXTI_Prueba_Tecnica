# Base image with ASP.NET Core runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

# Image for building the app
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Eventos.Api/Eventos.Api.csproj", "Eventos.Api/"]
RUN dotnet restore "./Eventos.Api/Eventos.Api.csproj"
COPY . .
WORKDIR "/src/Eventos.Api"
RUN dotnet build "./Eventos.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Image for publishing the app
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Eventos.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Final image with runtime
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Install dotnet-ef tool
RUN dotnet tool install --global dotnet-ef
ENV PATH="$PATH:/root/.dotnet/tools"

# Run migrations and then start the app
ENTRYPOINT ["sh", "-c", "dotnet ef database update && dotnet Eventos.Api.dll"]

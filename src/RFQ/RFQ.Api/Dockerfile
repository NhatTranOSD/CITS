FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["RFQ.Api/RFQ.Api.csproj", "RFQ.Api/"]
RUN dotnet restore "RFQ.Api/RFQ.Api.csproj"
COPY . .
WORKDIR "/src/RFQ.Api"
RUN dotnet build "RFQ.Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "RFQ.Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "RFQ.Api.dll"]
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class V3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Broj Sacuvanih Kartica",
                table: "Favorite/Saved");

            migrationBuilder.RenameColumn(
                name: "Podaci",
                table: "Favorite/Saved",
                newName: "city");

            migrationBuilder.AddColumn<string>(
                name: "aqi",
                table: "Favorite/Saved",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "aqi",
                table: "Favorite/Saved");

            migrationBuilder.RenameColumn(
                name: "city",
                table: "Favorite/Saved",
                newName: "Podaci");

            migrationBuilder.AddColumn<int>(
                name: "Broj Sacuvanih Kartica",
                table: "Favorite/Saved",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}

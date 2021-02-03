using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Favorite/Saved",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", maxLength: 255, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Podaci = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BrojSacuvanihKartica = table.Column<int>(name: "Broj Sacuvanih Kartica", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favorite/Saved", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Opis",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", maxLength: 255, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CistVazduh = table.Column<string>(name: "Cist Vazduh", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    UmerenoZagadjen = table.Column<string>(name: "Umereno Zagadjen", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Zagadjen = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    OtrovnoiNezdravo = table.Column<string>(name: "Otrovno i Nezdravo", type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Opis", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Favorite/Saved");

            migrationBuilder.DropTable(
                name: "Opis");
        }
    }
}
